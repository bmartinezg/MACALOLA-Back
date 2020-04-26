const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.CHIMP);
var md5 = require('md5');

const url = '/lists/811c613026/members'

let addToSuscriptionList = async (email) => {
  
  try {
    return await mailchimp.post(url, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        'CTA': 'NEWCLIENT',
        'FNAME': '',
        'LNAME': '',
        'BIRTHDAY': '',
      }
    })
  } catch (error) {
    return error
  } 

}

let reactivateToSuscriptionList = async (email) => {

  let hash = md5(email)
  url2 = url +'/'+ hash
  console.log(url2);
  try {
    return await mailchimp.put(url2, {
      email_address: email,
      status: 'subscribed',
      }
    )
  } catch (error) {
    return error
  }
}

let unsuscribeFromSuscriptionList = async (email) => {

  let hash = md5(email)
  url2 = url +'/'+ hash
  console.log(url2);
  try {
    return await mailchimp.put(url2, {
      email_address: email,
      status: 'unsubscribed',
      }
    )
  } catch (error) {
    return error
  }
}


module.exports = {
  addToSuscriptionList,
  reactivateToSuscriptionList,
  unsuscribeFromSuscriptionList
}