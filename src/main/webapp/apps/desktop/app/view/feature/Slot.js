Ext.define('Builder.view.feature.Slot', {
	extend: 'Ext.form.Panel',

	requires: [
		'Ext.form.field.ComboBox'
	],

	xtype: 'feature_slot',

	padding: 4,

	items: [
		{
			xtype: 'combocleartrigger',
			width: 200,
			valueField: 'id',
			displayField: 'name',
			matchFieldWidth: false,
			editable: false
		}
	]
});