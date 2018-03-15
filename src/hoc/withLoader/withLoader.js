import React, {Component,Fragment} from 'react';
import Loader from '../../components/UI/Loader/Loader';

const withLoader = (WrappedComponent, axios) => {
    return class extends Component {

        constructor (props) {
            super(props);

            this.state = {
                loading: false
            };

            this.state.interceptorIdreq = axios.interceptors.request.use(request => {
                this.setState({loading: true});
                return request;
            });

            this.state.interceptorIdres = axios.interceptors.response.use(response => {
                this.setState({loading: false});
                return response;
            });

        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.state.interceptorIdreq);
            axios.interceptors.response.eject(this.state.interceptorIdres);
        };

        render () {

            let loader = null;

            if (this.state.loading) {
                loader = <Loader show={this.state.loading}/>
            }

            return (
                <Fragment>
                    {loader}
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }

    }
};

export default withLoader;

