import React from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

const SidebarDashboard: React.FC = () => {
  return (
    <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible width="thin">
      <Menu.Item as="a">
        <Icon name="upload" />
        Deploy contract
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="paste" />
        Contracts
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="settings" />
        Settings
      </Menu.Item>
    </Sidebar>
  )
}

export default SidebarDashboard
