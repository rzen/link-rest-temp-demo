Ext.define('Builder.view.chrome.Bar', {
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'chrome_bar',

	ui: 'chrome-top',

	items: [
		{
			text: 'ATM Load Builder'
		}, '->', {
			text: 'John Doe',
			menu: [
				{
					text: 'Preferences...'
				}, '-', {
					text: 'Logout'
				}
			]
		}
	]
});