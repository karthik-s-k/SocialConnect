import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface IProps {
    openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" style={{marginRight: "10px"}} />
                        Social connect
                    </Menu.Item>
                    <Menu.Item name='Activities' />
                    <Menu.Item> 
                        <Button onClick={openCreateForm} positive content="Create activity" />
                    </Menu.Item>
                </Container>                
            </Menu>
        </div>
    )
}
