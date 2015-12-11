var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var FormBasic = React.createClass({
    render: function () {
        return (
            <form method="post">
                <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="pass" placeholder="Your password" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success" value="Login" />
                </div>
            </form>
        )
    }
});

ReactDOM.render(
    <FormBasic />,
    document.getElementById('form_basic')
);
