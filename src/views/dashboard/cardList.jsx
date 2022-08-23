import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined } from '@ant-design/icons';
import { Col, Row, Card, Statistic, } from 'antd';
const { Countdown } = Statistic
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
export default function CardList() {
    return (
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <Card>
                    <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card>
                    <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{
                            color: '#cf1322',
                        }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card>
                    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card>
                    {/* <Statistic title="Unmerged" value={93} suffix="/ 100" /> */}
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </Card>
            </Col>
        </Row>
    )
}
