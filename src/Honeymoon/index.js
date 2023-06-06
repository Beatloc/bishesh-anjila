import './index.css'

const Honeymoon = () => {
  return (
    <div>
      <div className={"honeymoon-wrapper"}>
        <p className="mint" style={{ fontSize: 32 }}>Bishesh and Anjila's honeymoon to Bali</p>
        <div className={"image-wrapper"}>
          <img style={{ maxHeight: 520 }} src="images/bali.png"  alt="keling-kling"/>
        </div>
        <div className={"text-wrapper"}>
          <p>Help them get to bali for their honeymoon.
            Dont worry I will update the details of the funds collected everyday (or I will go to Bali on my own, you never know).
          </p>
        </div>
      </div>
      <div className={"bank-details-wrapper"}>
        <div className="bank-detail-title">Bank Details</div>
        <p className="mint" style={{ paddingBottom: 8 }}>
          Bank Name: Nepal Investment Bank Limited <br />
          Account Name: Bibek Aryal <br />
          Account Number: 0120-5080-363495 <br />
          Swift Code/BIC: NIBLNPKT
        </p>
      </div>
    </div>
  )
}

export default Honeymoon;