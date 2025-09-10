import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <header className='p-2 bg-blue text-light'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="d-flex gap-4">
                            <a href="#" className='nav-link'>support@avenuedesign.in</a> |  <a href="tel:989898992" className='nav-link'>+918224973413</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                        <p className='mb-0'>Building slack support scale; Learn how to handle 100+ customers on Slack</p>

                        </div>
                    </div>
                    <div className="col-md-2">
                        <a href="tel:989898992" className='nav-link'>+918224973413</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;