import Facebook from "../../assets/img/facebook-icon.svg";
import Instagram from "../../assets/img/instagram-icon.svg";

const Footer = () => {
  return (
    <div class="footer">
      <footer>
        <div class="social">
          <h4>Stay Connected!</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src={Facebook} alt="Visit us at Facebook." />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src={Instagram} alt="Visit us on Instagram." />
              </a>
            </li>
          </ul>
        </div>
        <address>
          Wall of Wonder <br />
          RBC Plaza
          <br />
          60 South 6th Street
          <br />
          Minneapolis, MN 55402
        </address>
      </footer>
    </div>
  );
};

export default Footer;
