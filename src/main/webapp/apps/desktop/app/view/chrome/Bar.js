Ext.define('Builder.view.chrome.Bar', {
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'chrome_bar',

	ui: 'chrome-top',

	viewModel: {},

	items: [
		{
			text: 'ATM Load Builder'
		}, '->', {
			bind: {
				text: '{userName}'
			},
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