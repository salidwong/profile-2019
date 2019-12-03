import React from 'react'
import { Button, Icon } from 'antd'
import styled from 'styled-components'
import { HeartSvg } from '../../components/icons/heart-svg' 
const Profile: React.FC = () => {
    return (
        <>
            <Container>Profile</Container>
            <Button type={'danger'} size={'small'} loading={false}>click</Button>
            <HeartIcon component={HeartSvg} ></HeartIcon>
            <div>Test</div>
        </>
    )
}
export default Profile

const Container = styled.div `
    height : 50px;
    background: ${p => p.theme.color.secondary};
    
`
const HeartIcon = styled(Icon) `
    color: hotpink;
`