package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.FeatureMenu;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("featuremenu")
@Produces(MediaType.APPLICATION_JSON)
public class FeatureMenuResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<FeatureMenu> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(FeatureMenu.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<FeatureMenu> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(FeatureMenu.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<FeatureMenu> create(String data) {
		return LinkRest.create(FeatureMenu.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<FeatureMenu> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(FeatureMenu.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(FeatureMenu.class, config).id(id).delete();
	}
}