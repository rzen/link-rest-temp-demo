package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.Feature;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("feature")
@Produces(MediaType.APPLICATION_JSON)
public class FeatureResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<Feature> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(Feature.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<Feature> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(Feature.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<Feature> create(String data) {
		return LinkRest.create(Feature.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<Feature> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(Feature.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(Feature.class, config).id(id).delete();
	}
}