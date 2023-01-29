import React, { useEffect } from 'react'
import { Button, Form, Input, Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { searchUniversities } from '../../redux/action/country.action';
import Loading from "../../loading";


const CountriesSearch = () => {
    const countryData = useSelector((state) => state.universitiesReducer);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(searchUniversities(values.username))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    console.log(countryData)
    useEffect(() => {
        dispatch(searchUniversities(''));
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'domains',
            dataIndex: 'domains',
            key: 'domains',
        },
        {
            title: 'Website',
            dataIndex: 'web_pages',
            key: 'age',
            render: (el) => <a href={el}>visit website of university</a>,
        },
    ];

    return (
        <div>
            <>
                <div>
                    <Form
                        style={{ display: 'flex', justifyContent: 'center' }}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input your universities!',
                                },
                            ]}
                        >
                            <Input style={{ width: '173%' }} />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={countryData.loading}
                            >
                                Search
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {countryData.loading
                    ?
                    <Loading />
                    :
                    <Table
                        columns={columns}
                        dataSource={countryData.data}
                        rowKey={"id"}
                    />}
            </>
        </div>
    )
}

export default CountriesSearch;