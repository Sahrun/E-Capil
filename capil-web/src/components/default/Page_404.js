import React from 'react';
class Page_404 extends React.Component {
    render() {
        return <div className="page-not-found">
				<div className="wrapper not-found">
					<h1 className="animated fadeIn">404</h1>
					<div className="desc animated fadeIn"><span>OOPS!</span><br/>Looks like you get lost</div>
						<a href="index.html" className="btn btn-primary btn-back-home mt-4 animated fadeInUp">
						<span className="btn-label mr-2">
							<i className="flaticon-home"></i>
						</span>
						Back To Home
					</a>
				</div>
			</div>;
    }
}

export default Page_404;