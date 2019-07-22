import React, { PureComponent } from 'react'
import { Sidebar as SidebarDHX } from 'dhx-suite'
import {
  withRouter
} from 'react-router-dom'

 class Sidebar extends PureComponent {
	componentDidMount() {
		this.sidebar = new SidebarDHX(this.el, {
			css: 'dhx_widget--border_right',
      data: [
				{
					id: "logo",
					type: 'customButton', 
					css: 'logo-button',
					html: '<img src="/static/logo_r.svg" alt="DHTMLX - React"/>',
					group: "nav",
					twoState: true
				},
				{
					type: 'separator',
				},
				{
					value: 'Calendar',
					id: 'calendar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Toolbar',
					id: 'toolbar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Timepicker',
					id: 'timepicker-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Slider',
					id: 'slider-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Colorpicker',
					id: 'colorpicker-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Sidebar',
					id: 'sidebar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Ribbon',
					id: 'ribbon-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Dataview',
					id: 'dataview-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'List',
					id: 'list-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Grid',
					id: 'grid-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Menu',
					id: 'menu-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Form',
					id: 'form-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Tabbar',
					id: 'tabbar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Combobox',
					id: 'combobox-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Tree',
					id: 'tree-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Treegrid',
					id: 'treegrid-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Chart',
					id: 'chart-link',
					group: "nav",
					twoState: true
				},
				// {
				// 	value: 'Layout',
				// 	id: 'layout-link',
				// 	group: "nav",
				// 	twoState: true
				// },
				{
					value: 'Window',
					id: 'window-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Message',
					id: 'message-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Popup',
					id: 'popup-link',
					group: "nav",
					twoState: true
				},
			]
		});
		const activeWidget = window.location.pathname.slice(1)
		if (activeWidget) {
			this.props.handleActiveWidgetChange(activeWidget)
			this.sidebar.data.update(activeWidget + "-link", {active: true})
		}

		this.sidebar.events.on('click', (id) => {
			if (id !== 'logo') {
				const widgetName = id.split('-')[0]
				this.props.history.push('/' + widgetName)
				this.props.handleActiveWidgetChange(widgetName)
				if (activeWidget) {
					this.sidebar.data.update(activeWidget + "-link", {active: false})
				}
				this.sidebar.data.update(widgetName + "-link", {active: true})
			} else {
				this.props.history.push('/')
				this.props.handleActiveWidgetChange("")
				if (activeWidget) {
					this.sidebar.data.update(activeWidget + "-link", {active: false})
				}
			}
		})
	}
	componentWillUnmount() {
    this.sidebar.destructor();
  }
	render() {
		return (
			<div style={{maxHeight: "100%"}} ref={el => this.el = el}>
				
			</div>
		)
	}
}
export default withRouter(Sidebar)