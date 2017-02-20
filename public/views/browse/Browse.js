import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BrowseItem from './BrowseItem'

export default class Browse extends React.Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }
    search(term){
        console.log('search function', term);
        axios.get(`http://api.sqoot.com/v2/deals?api_key=6r9vz8&location=${term.params.city}&category_slugs=restaurants&per_page=50`).then(response => {
            console.log(response.data.deals);

            let dealsList = response.data.deals.map(function(deal){
                return <BrowseItem 
                            key={deal.deal.id}
                            title={deal.deal.title}
                            shortTitle={deal.deal.short_title}
                            merchant={deal.deal.merchangt}
                            price={deal.deal.price}
                            provider={deal.deal.provider_name}
                            numberSold={deal.deal.number_sold}
                            limit={deal.deal.fine_print}
                            description={deal.description}
                            img={deal.deal.image_url}
                            url={deal.deal.url}
                            value={deal.deal.value}
                            expires={deal.deal.expires_at}
                        />
            })
            this.setState({
                deals: dealsList,
            })
            console.log(this.state.deals, 'state deals');
        });
    }
    render(){
        if(!this.state.deals){
            this.search(this.props);
        }
        return (
            <section>
                <div>
                    {this.state.deals ? this.state.deals : ''}
                </div>
            </section>
        )
    }
}