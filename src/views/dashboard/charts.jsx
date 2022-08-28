import { useEffect, useState } from 'react';
import { Avatar, List, Card, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { DualAxes, Liquid, Mix } from '@ant-design/plots'
import { DataView } from '@antv/data-set';
import { getMessageList } from '../../api';
import Loading from '../../components/loading/Loading';
const data = [
    {
        time: '2020-08-20',
        consumeTime: 10868,
        completeTime: 649.483,
    },
    {
        time: '2020-08-21',
        consumeTime: 8786,
        completeTime: 1053.7,
    },
    {
        time: '2020-08-22',
        consumeTime: 10824,
        completeTime: 679.817,
    },
    {
        time: '2020-08-23',
        consumeTime: 7860,
        completeTime: 638.117,
    },
    {
        time: '2020-08-24',
        consumeTime: 13253,
        completeTime: 843.3,
    },
    {
        time: '2020-08-25',
        consumeTime: 17015,
        completeTime: 1092.983,
    },
    {
        time: '2020-08-26',
        consumeTime: 19298,
        completeTime: 1036.317,
    },
    {
        time: '2020-08-27',
        consumeTime: 13937,
        completeTime: 1031.9,
    },
    {
        time: '2020-08-28',
        consumeTime: 11541,
        completeTime: 803.467,
    },
    {
        time: '2020-08-29',
        consumeTime: 15244,
        completeTime: 830.733,
    },
    {
        time: '2020-08-30',
        consumeTime: 14247,
        completeTime: 709.867,
    },
    {
        time: '2020-08-31',
        consumeTime: 9402,
        completeTime: 665.233,
    },
    {
        time: '2020-09-01',
        consumeTime: 10440,
        completeTime: 696.367,
    },
    {
        time: '2020-09-02',
        consumeTime: 9345,
        completeTime: 692.867,
    },
    {
        time: '2020-09-03',
        consumeTime: 18459,
        completeTime: 936.017,
    },
    {
        time: '2020-09-04',
        consumeTime: 9763,
        completeTime: 782.867,
    },
    {
        time: '2020-09-05',
        consumeTime: 11074,
        completeTime: 653.8,
    },
    {
        time: '2020-09-06',
        consumeTime: 11770,
        completeTime: 856.683,
    },
    {
        time: '2020-09-07',
        consumeTime: 12206,
        completeTime: 777.15,
    },
    {
        time: '2020-09-08',
        consumeTime: 11434,
        completeTime: 773.283,
    },
    {
        time: '2020-09-09',
        consumeTime: 16218,
        completeTime: 833.3,
    },
    {
        time: '2020-09-10',
        consumeTime: 11914,
        completeTime: 793.517,
    },
    {
        time: '2020-09-11',
        consumeTime: 16781,
        completeTime: 894.45,
    },
    {
        time: '2020-09-12',
        consumeTime: 10555,
        completeTime: 725.55,
    },
    {
        time: '2020-09-13',
        consumeTime: 10899,
        completeTime: 709.967,
    },
    {
        time: '2020-09-14',
        consumeTime: 10713,
        completeTime: 787.6,
    },
    {
        time: '2020-09-15',
        consumeTime: 0,
        completeTime: 644.183,
    },
    {
        time: '2020-09-16',
        consumeTime: 0,
        completeTime: 1066.65,
    },
    {
        time: '2020-09-17',
        consumeTime: 20357,
        completeTime: 932.45,
    },
    {
        time: '2020-09-18',
        consumeTime: 10424,
        completeTime: 753.583,
    },
];
const config = {
    data: [data, data],
    xField: 'time',
    yField: ['consumeTime', 'completeTime'],
    meta: {
        consumeTime: {
            alias: '产出耗时',
            formatter: (v) => {
                return Number((v / 60).toFixed(2));
            },
        },
        completeTime: {
            alias: '完成时间',
            formatter: (v) => {
                return Number((v / 100).toFixed(1));
            },
        },
    },
    geometryOptions: [
        {
            geometry: 'column',
            color: '#586bce',
        },
        {
            geometry: 'line',
            color: '#29cae4',
        },
    ],
    xAxis: {
        label: {
            autoRotate: true,
            autoHide: false,
            autoEllipsis: false,
        },
        tickCount: data.length / 2,
    },
    yAxis: {
        consumeTime: {
            label: {
                formatter: (v) => {
                    return `${v}分`;
                },
            },
        },
        completeTime: {
            label: {
                formatter: (v) => {
                    return `${v}`;
                },
            },
        },
    },
    legend: {
        itemName: {
            formatter: (text, item) => {
                return item.value === 'consumeTime' ? '产出耗时(分)' : '完成时间(分)';
            },
        },
    },
    annotations: {
        consumeTime: [
            {
                type: 'line',
                top: true,
                start: ['2020-08-26', 'min'],
                end: ['2020-08-26', 'max'],
                text: {
                    content: '发布时间点',
                    position: 'end',
                    autoRotate: false,
                    style: {
                        textAlign: 'start',
                    },
                },
            },
        ],
        completeTime: [
            {
                type: 'line',
                top: true,
                start: ['min', 1000],
                end: ['max', 1000],
                style: {
                    lineWidth: 1,
                    lineDash: [3, 3],
                },
                text: {
                    content: '完成时间阈值(1000s)',
                    position: 'end',
                    style: {
                        textAlign: 'end',
                    },
                },
            },
        ],
    },
};
const LiquidConfig = {
    percent: 0.25,
    shape: 'rect',
    outline: {
        border: 2,
        distance: 4,
    },
    wave: {
        length: 128,
    },
};
const mixData = [
    ['Cosmopolitan', 51, 45, 6],
    ['Martini', 67, 39, 28],
    ['Mojito', 19, 11, 8],
    ['Margarita', 47, 33, 14],
    ['Mai Tai', 32, 20, 12],
    ['Beer', 70, 20, 50],
];
const yearData = [
    ['2010', 60, 176, 35, 25],
    ['2011', 51, 136, 25, 26],
    ['2012', 73, 196, 35, 38],
    ['2013', 84, 315, 43, 41],
    ['2014', 79, 203, 36, 33],
    ['2015', 89, 286, 41, 48],
];
const mixConfig = {
    height: 500,
    padding: 'auto',
    tooltip: {
        showMarkers: false,
    },
    views: [
        {
            data: mixData.map((d) => ({
                type: d[0],
                value: d[1],
            })),
            region: {
                start: {
                    x: 0,
                    y: 0,
                },
                end: {
                    x: 0.5,
                    y: 0.4,
                },
            },
            coordinate: {
                type: 'theta',
                cfg: {
                    radius: 0.85,
                },
            },
            axes: {
                value: {
                    title: {
                        text: 'Drinks',
                    },
                    grid: null,
                    tickLine: null,
                    line: false,
                    ticks: false,
                },
            },
            geometries: [
                {
                    type: 'interval',
                    xField: '1',
                    yField: 'value',
                    colorField: 'type',
                    mapping: {},
                    adjust: {
                        type: 'stack',
                    },
                },
            ],
            interactions: [
                {
                    type: 'element-active',
                },
                {
                    type: 'association-highlight',
                },
            ],
        },
        {
            data: new DataView()
                .source(
                    mixData.map((d) => ({
                        type: d[0],
                        male: d[2],
                        female: d[3],
                    })),
                )
                .transform({
                    type: 'fold',
                    fields: ['male', 'female'],
                    key: 'gender',
                    value: 'value',
                }).rows,
            region: {
                start: {
                    x: 0.5,
                    y: 0,
                },
                end: {
                    x: 1,
                    y: 0.45,
                },
            },
            coordinate: {
                cfg: {
                    isTransposed: true,
                },
            },
            axes: {
                value: false,
            },
            geometries: [
                {
                    type: 'interval',
                    xField: 'type',
                    yField: 'value',
                    colorField: 'gender',
                    mapping: {},
                    adjust: {
                        type: 'dodge',
                        marginRatio: 0,
                    },
                },
            ],
        },
        {
            data: yearData.map((d) => ({
                year: d[0],
                ordered: d[1],
            })),
            region: {
                start: {
                    x: 0,
                    y: 0.52,
                },
                end: {
                    x: 0.48,
                    y: 1,
                },
            },
            axes: {
                year: {
                    title: {
                        text: 'Drinks ordered',
                    },
                },
            },
            meta: {
                ordered: {
                    min: 40,
                    max: 90,
                },
            },
            geometries: [
                {
                    type: 'area',
                    xField: 'year',
                    yField: 'ordered',
                    mapping: {},
                },
                {
                    type: 'line',
                    xField: 'year',
                    yField: 'ordered',
                    mapping: {
                        style: {
                            lineWidth: 0.5,
                        },
                    },
                },
            ],
        },
        {
            data: new DataView()
                .source(
                    yearData.map((d) => ({
                        year: d[0],
                        male: d[3],
                        female: d[4],
                    })),
                )
                .transform({
                    type: 'fold',
                    fields: ['male', 'female'],
                    key: 'gender',
                    value: 'turnout',
                }).rows,
            region: {
                start: {
                    x: 0.52,
                    y: 0.52,
                },
                end: {
                    x: 1,
                    y: 1,
                },
            },
            axes: {
                year: {
                    title: {
                        text: 'Turnout by gender',
                    },
                },
            },
            geometries: [
                {
                    type: 'interval',
                    xField: 'year',
                    yField: 'turnout',
                    colorField: 'gender',
                    adjust: {
                        type: 'dodge',
                        marginRatio: 0,
                    },
                    mapping: {},
                },
            ],
            interactions: [
                {
                    type: 'element-active',
                },
                {
                    type: 'association-sibling-highlight',
                },
            ],
        },
    ],
};
export default function Charts() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getList = async () => {
        setLoading(true)
        const { data } = await getMessageList()
        setLoading(false)
        setData(data)
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <>
            <Card className='top'>
                <Result
                    icon={<SmileOutlined />}
                    title="Good evening, Welcome back, Mr. Liu!"
                />
                <Loading loading={loading}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={item.name}
                                    description={item.content}
                                />
                            </List.Item>
                        )}
                    />
                </Loading>
                <Liquid {...LiquidConfig} style={{ width: 200 }} />
            </Card>
            <div className='charts'>
                <DualAxes {...config} />
            </div>
            <Card>
                <Mix {...mixConfig} />
            </Card>
        </>
    )
}
