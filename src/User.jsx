import React from 'react';
class User extends React.Component {
    //const { name, location, avatar_url } = data;
    // componentDidMount() {
    //     this.fetchUserInfo()
    // }
    state = {
        avatarUrl: null,
        name: null,
        location: null,
    }
    componentDidMount() {
        debugger;
        this.fetchUserInfo(this.props.match.params.userId)
    }
    // componentDidUpdate(prevProp) {
    //     debugger;
    //     if (this.props.match.params.userId !== prevProp.match.params.userId) {
    //         this.fetchUserInfo(this.props.match.params.userId);
    //     }
    // }
    fetchUserInfo = (userData) => {
        return fetch(`https://api.github.com/users/${userData}`)
            .then(response => response.json())
            .then(userInfo => {
                debugger;
                return this.setState({
                    avatarUrl: userInfo.avatar_url,
                    name: userInfo.name,
                    location: userInfo.location,
                });
            });
    }
    render() {
        // const { userId } = this.props.match.params;
        // const userData = this.fetchUserInfo(userId);
        const { avatarUrl, name, location } = this.state;
        if (!avatarUrl || !name || !location) {
            return null
        }
        debugger;
        return (
            <div className="user">
                <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        );
    }
};

export default User;