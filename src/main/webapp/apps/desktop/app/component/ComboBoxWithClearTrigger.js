Ext.define('Builder.component.ComboBoxWithClearTrigger', {
	extend: 'Ext.form.field.ComboBox',

	xtype: 'combocleartrigger',

	initComponent: function () {
		this.callParent();

		var triggers = this.getTriggers();
		var clearTrigger = Ext.create('Ext.form.trigger.Trigger', {
			cls		: 'x-form-clear-trigger',
			hidden	: true,
			scope	: this,
			handler	: this.clearValue,
			weight	: -1
		});
		triggers.clear = clearTrigger;
		this.setTriggers(triggers);
	},

	onClearTriggerClick: function(field) {
		field.clearValue();
	}
});