Ext.define("Builder.model.BaseModel",{
	extend: "Ext.data.Model",
	schema: { namespace: "Builder.model" },
	fields: [{
		name: 'id', 
		allowNull: true
	}]
});