import React, { Component} from 'react';
class Footer extends Component {
    render(){
    return (
        <footer id="myFooter">
        <div className="container myColsrow">
            <div className="row">
                <div className="col-sm-3 myCols">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="javascript:;">Home</a></li>
                        <li><a href="#">Signup</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 myCols">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 myCols">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 myCols">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="social-networks">
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="facebook"><i className="fa fa-facebook-official"></i></a>
            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
        </div>
        <div className="footer-copyright">
            <p>© 2019 Copyright - Plus +</p>
        </div>
    </footer>
      )
    }
}
export default Footer