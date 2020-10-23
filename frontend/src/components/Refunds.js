import React from 'react';
import {Grid} from '@material-ui/core';

const Refunds = () => {
  return(
    <Grid container justify="center" alignItems="center">
      <Grid item lg={10} md={10} sm={10} xs={10} style={{marginTop:'5%'}}>
        <h1 style={{color:'#3f3d56', textAlign:'center'}}>Cancellation/Refund Policy</h1>
      </Grid>
      <Grid item lg={6} md={10} sm={10} xs={10} style={{color:'#404040', textAlign:'justify', lineHeight:'1.5', marginBottom:'5%'}}>
      <br /><h3 style={{color:'#3f3d56'}}>Returns</h3><br/><br/>
Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.<br/><br/>
To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.<br/><br/>
Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.<br/><br/>
Additional non-returnable items:
<ul style={{listStyleType:'disc'}}>
<li>Gift cards</li>
<li>Downloadable software products</li>
<li>Some health and personal care items</li>
</ul>
To complete your return, we require a receipt or proof of purchase.<br/><br/>
Please do not send your purchase back to the manufacturer.<br/><br/>
There are certain situations where only partial refunds are granted: (if applicable)<br/>
<ul style={{listStyleType:'disc'}}>
<li>Book with obvious signs of use</li>
<li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
<li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
<li>Any item that is returned more than 30 days after delivery</li>
</ul><br/><br/>
<h3 style={{color:'#3f3d56'}}>Refunds (if applicable)</h3><br/><br/>
Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.<br/><br/>
If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.<br/><br/>
<h3 style={{color:'#3f3d56'}}>Late or missing refunds (if applicable)</h3><br/><br/>
If you haven’t received a refund yet, first check your bank account again.<br/><br/>
Then contact your credit card company, it may take some time before your refund is officially posted.<br/><br/>
Next contact your bank. There is often some processing time before a refund is posted.<br/><br/>
If you’ve done all of this and you still have not received your refund yet, please contact us at [___Company Contact Email___].<br/><br/>
<h3 style={{color:'#3f3d56'}}>Sale items (if applicable)</h3><br/><br/>
Only regular priced items may be refunded, unfortunately sale items cannot be refunded.<br/><br/>
<h3 style={{color:'#3f3d56'}}>Exchanges (if applicable)</h3><br/><br/>
We only replace items if they are defective or damaged.  If you need to exchange it for the same item, send us an email at [___Company Contact Email___] and send your item to: 622 Manglam Electronic Market Jaipur Rajasthan India 302001.<br/><br/>
<h3 style={{color:'#3f3d56'}}>Gifts</h3><br/><br/>
If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.<br/><br/>
If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.<br/><br/>
<h3 style={{color:'#3f3d56'}}>Shipping</h3><br/><br/>
To return your product, you should mail your product to: 622 Manglam Electronic Market Jaipur Rajasthan India 302001.<br/><br/>
You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.<br/><br/>
Depending on where you live, the time it may take for your exchanged product to reach you, may vary.<br/><br/>
If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.<br/><br/>
      </Grid>
    </Grid>
  )
}

export default Refunds;
