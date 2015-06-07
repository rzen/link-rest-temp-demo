package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.FeatureMenuItem;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("featuremenuitem")
@Produces(MediaType.APPLICATION_JSON)
public class FeatureMenuItemResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<FeatureMenuItem> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(FeatureMenuItem.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<FeatureMenuItem> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(FeatureMenuItem.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<FeatureMenuItem> create(String data) {
		return LinkRest.create(FeatureMenuItem.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<FeatureMenuItem> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(FeatureMenuItem.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(FeatureMenuItem.class, config).id(id).delete();
	}
}