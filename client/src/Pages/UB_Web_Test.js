import React from 'react'
import axios from 'axios'
import { 
    Layout, Menu, Button
} from 'antd'
import {
    WalletFilled, ShopFilled, HomeOutlined
    ,MobileOutlined, TabletOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

function Test_Page() {
    let navigate = useNavigate()

    axios.get ('/api/test/init'
    )
    .then(((res) => {
        console.log(res.data)
    }))

    const APITest = () => {
        
    }
    
    
    return(
        <Layout>
             <Sider width={240} collapsible={true}>
                {/* <div style={{ padding: 20 }}>
                    <img width = {200} src= {logoimg} />
                </div> */}
                <div>
                <Menu defaultOpenKeys={['']} defaultSelectedKeys={['']}
                    theme="dark"
                    mode="inline"
                    items={[
                        { 
                            key: '0'
                            ,label: 'Home' 
                            ,icon: <HomeOutlined />
                            ,onClick: () => {
                                navigate('/')
                            }
                        },
                        {
                        key: '1'
                        ,icon: <TabletOutlined />
                        ,label: 'Menu01'
                        ,children: [
                            {
                                key: '1-1'
                                ,icon: <WalletFilled />
                                ,label: 'SubMenu01'
                                ,onClick: () => {
                                    navigate('/test')
                                }
                            }
                        ]
                        }
                    ]}
                />
                </div>
            </Sider>
            <Layout style={{ minHeight: '100vh',minWidth: '85vw' }}>
                <Header>
                
                </Header>
                <Content>
                    <Button type="primary" onClick={APITest}>
                        Submit
                    </Button>
                </Content>
            </Layout>
        </Layout>
    )
}


export default Test_Page;