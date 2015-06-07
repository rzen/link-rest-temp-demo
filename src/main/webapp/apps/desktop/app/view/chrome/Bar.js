Ext.define('Builder.view.chrome.Bar', {
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'chrome_bar',

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