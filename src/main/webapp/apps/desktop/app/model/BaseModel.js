Ext.define("Builder.model.BaseModel",{
	extend: "Ext.data.Model",
	idProperty: "id",
	schema: {
		namespace: "Builder.model"
	},
	fields: [{
		name: 'id', 
		allowNull: true
	}]
});