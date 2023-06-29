import "./DesktopProfileSummaryPer.css";
const DesktopProfileSummaryPer = () => {
  return (
    <div className="desktop-profile-summary-per">
      <div className="footer">
        <div className="footer-content">
          <div className="h1">YADOYA</div>
          <div className="discover-a-world">
            Discover a world of comfort and convenience with our hotel booking
            website, where dreams become reservations and wanderlust turns into
            unforgettable experiences.
          </div>
          <div className="footer-content-child" />
          <div className="all-rights-reserved">{`2023 ©️ All rights Reserved `}</div>
        </div>
        <div className="quick-links">
          <div className="all-rights-reserved">Help</div>
          <div className="all-rights-reserved">FAQ</div>
          <div className="all-rights-reserved">Customer Service</div>
          <div className="all-rights-reserved">How to Guide</div>
          <div className="all-rights-reserved">Contact Us</div>
        </div>
      </div>
      <div className="content-area">
        <div className="side-nav">
          <div className="personal-info">
            <img className="profile-icon" alt="" src="/profileicon.svg" />
            <div className="personal-info1">Personal Info</div>
          </div>
          <div className="side-nav-child" />
          <div className="payment-details">
            <img className="profile-icon" alt="" src="/paymenticon.svg" />
            <div className="personal-info1">Payment Details</div>
          </div>
          <div className="side-nav-child" />
          <div className="personal-info">
            <img className="profile-icon" alt="" src="/passwordicon.svg" />
            <div className="personal-info1">Change Password</div>
          </div>
          <div className="side-nav-child" />
          <div className="personal-info">
            <img className="profile-icon" alt="" src="/securityicon.svg" />
            <div className="personal-info1">{`Privacy & Security`}</div>
          </div>
        </div>
        <div className="personal-info2">
          <div className="personal-info-head">
            <div className="personal-info-parent">
              <b className="div">Personal Info</b>
              <div className="please-verify-the">
                Please verify the information provided as it may be outdated.
              </div>
            </div>
            <div className="profile-edit">
              <img
                className="profile-image-edit-icon"
                alt=""
                src="/profileimageedit@2x.png"
              />
            </div>
          </div>
          <div className="side-nav-child" />
          <div className="name">
            <div className="date-of-birth">Name</div>
            <div className="taro-japan-wrapper">
              <div className="taro-japan">Taro Japan</div>
            </div>
            <div className="edit">Edit</div>
          </div>
          <div className="side-nav-child" />
          <div className="email-id">
            <div className="date-of-birth">Email Id</div>
            <div className="dummytextgmailcom-parent">
              <div className="dummytextgmailcom">dummy.text@gmail.com</div>
              <div className="chip">
                <div className="label">
                  <div className="medium-label-medium-14px">Verified</div>
                </div>
              </div>
              <div className="this-is-the">
                This is the email address you use to sign in. It’s also where we
                send your booking confirmations.
              </div>
              <img className="verified-icon" alt="" src="/verifiedicon.svg" />
            </div>
            <div className="edit">Edit</div>
          </div>
          <div className="side-nav-child" />
          <div className="email-id">
            <div className="date-of-birth">Phone Number</div>
            <div className="edit">Edit</div>
            <div className="parent">
              <div className="div">+81 8649871525</div>
              <div className="pressing-send-code">
                Pressing 'Send code' will text a 6-digit code to your phone.
                You'll need to enter this at the next step.
              </div>
            </div>
          </div>
          <div className="side-nav-child" />
          <div className="name">
            <div className="date-of-birth">Date of Birth</div>
            <div className="male">1990/05/20</div>
            <div className="edit">Edit</div>
          </div>
          <div className="side-nav-child" />
          <div className="name">
            <div className="date-of-birth">Sex</div>
            <div className="male">Male</div>
            <div className="edit">Edit</div>
          </div>
          <div className="side-nav-child" />
          <div className="name">
            <div className="date-of-birth">Address</div>
            <div className="edit">Edit</div>
            <div className="shibuya-district-tokyo">
              Shibuya district, Tokyo , 111-222
            </div>
          </div>
          <div className="side-nav-child" />
          <div className="name">
            <div className="date-of-birth">Nationality</div>
            <div className="shibuya-district-tokyo">Japan</div>
            <div className="edit">Edit</div>
          </div>
          <div className="side-nav-child" />
        </div>
      </div>
      <div className="hero-section">
        <img className="hero-image-icon" alt="" src="/heroimage@2x.png" />
      </div>
      <div className="header">
        <div className="logo">
          <div className="yadoya-logo">
            <div className="yadoya-logo1">YADOYA</div>
          </div>
        </div>
        <div className="menu-text">
          <div className="my-nfts">My NFT’s</div>
          <div className="my-nfts">Categories</div>
          <div className="my-nfts">Tickets</div>
          <div className="my-nfts">Favorites</div>
        </div>
        <div className="profile-icons">
          <img className="menu-icon" alt="" src="/menuicon.svg" />
          <img className="translator-icon" alt="" src="/translator.svg" />
          <img className="favourite-icon" alt="" src="/favourite.svg" />
          <img className="notification-icon" alt="" src="/notification.svg" />
          <img className="profile-image-icon" alt="" src="/profile-image.svg" />
        </div>
      </div>
    </div>
  );
};

export default DesktopProfileSummaryPer;
