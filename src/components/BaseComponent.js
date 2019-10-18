import React from 'react';
import { Get } from 'react-axios';
import AuthenticatedComponent from './AuthenticatedComponent'

class BaseComponent extends AuthenticatedComponent {

    renderComponent() {
        return (
            <div>
                <Get url={this.props.url} params={this.props.params}>
                    {(error, response, isLoading, makeRequest, axios) => {
                    if(error) {
                        return (<div>Something bad happened: {error.response} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if(isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if(response !== null) {
                        return (<div>{this.renderContainer(response.data)}</div>)
                    }
                    return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </div>
        )
    }

}

export default BaseComponent;