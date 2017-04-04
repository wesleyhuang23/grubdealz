import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BrowseItem from './BrowseItem'

export default class Browse extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }
    //browsing the city
    componentWillMount(){
        if(!this.state.deals){
            this.search(this.props);
            this.setState({
                term: this.props.params.city
            })
        }
    }
    term(event){
        console.log(event.target.value);
        this.setState({
            city: event.target.value
        });
    }
    search(term){
        console.log('search function', term);
        this.setState({
            term: term
        })
        axios.get(`http://api.sqoot.com/v2/deals?api_key=6r9vz8&location=${term.params.city}&category_slugs=restaurants&per_page=50`).then(response => {
            console.log(response.data.deals);
            let groupon = response.data.deals.filter(deal => {
                return deal.provider_name === 'Groupon';
            });
            console.log(groupon);
            let dealsList = response.data.deals.map(function(deal){
                return <BrowseItem 
                            key={deal.deal.id}
                            id={deal.deal.id}
                            title={deal.deal.title}
                            shortTitle={deal.deal.short_title}
                            merchant={deal.deal.merchant}
                            price={deal.deal.price}
                            provider={deal.deal.provider_name}
                            numberSold={deal.deal.number_sold}
                            discountAmount={deal.deal.discount_amount}
                            discountPercent={deal.deal.discount_percentage}
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
            return (
                <div>
                    <section className="browse-header">
                        <h1>{this.state.term}</h1>
                        <form>
                            <input placeholder="city" type="text" onChange={this.term.bind(this)}/>
                        </form>
                    </section>

                        <div className="deal-item-wrapper">
                            {this.state.deals ? this.state.deals : ''}
                        </div>
                </div>
            )
    }
}