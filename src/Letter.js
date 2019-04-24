import React from 'react'

function Letter() {
  return (
    <div className="letter">
      <h1 className="align-center">SAMPLE COMPLAINT LETTER</h1>
      <br />
      <h4 className="align-center">DATE</h4>
      <br />
      <p>
        NAME OF CONTACT PERSON (If available)<br />
        Title<br />
        Company Name<br />
        Consumer Complaint Division (If you have no specific contact)<br />
        Street Address<br />
        City, State, Zip<br />
        <br />
        Dear (Contact Person):<br />
        <br />
        Re: Account Number (If applicable)<br />
        <br />
        On (date) I bought, leased rented, or had repaired a (name of the product with serial or model number or service performed) at (location, date and other important details of the transaction).<br />
        <br />
        Unfortunately, your product (or service) has not performed well (or the service was inadequate) because (state the problem). I am disappointed because (explain the problem: for example the product does not work properly, the service was not performed correctly, and I was billed the wrong amount, something was not disclosed clearly or was misrepresented, etc.)<br />
        <br />
        To resolve the problem, I would appreciate your (state the specific action you want – money back, charge card credited, repair, exchange, etc.). Enclosed are copies (do not send originals) of my records (include receipts, guarantees, warranties, canceled checks, contracts, model and serial numbers, and any other documents).<br />
        <br />
        I look forward to your reply and a resolution to my problem, and wait until (set a time limit) before seeding help from the Johnson County District Attorney’s Consumer Protect ion Division. Please contact me at the address provided or by phone.<br />
        <br />
        Sincerely,<br />
        <br />
        Name<br />
        Address<br />
        Phone Number E-Mail:<br />
        <br />
        <br />
      </p>
    </div>
  )
}

export default Letter