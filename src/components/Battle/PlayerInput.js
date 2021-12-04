import {Component} from "react";
import { Form, Input, Button } from 'antd';

class PlayerInput extends Component {
    state = {
        username: ''
    }

    handleUserNameField = (event) => {
        this.setState({username: event.target.value });
    }

    handleSubmit = () => {
        this.props.onSubmit(this.props.id, this.state.username)
    }

    render() {
        return (
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={this.handleSubmit}
                autoComplete="off"
                >
                <Form.Item
                    label={this.props.label}
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input username!',
                    },
                    ]}
                >
                    <Input id='username' placeholder="GitHub UserName" value={this.state.username} onChange={this.handleUserNameField} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" disabled={!this.state.username}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default PlayerInput;
