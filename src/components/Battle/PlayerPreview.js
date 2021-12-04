import { Card } from "antd"

const { Meta } = Card

const PlayerPreview = (props) => {
    return (
        <Card
            style={{ width: 186 }}
            cover={<img alt="avatar" src={props.avatar} />}
        >
            <Meta title={`@${props.username}`} description={props.children} />
        </Card>
    )
}

export default PlayerPreview;



