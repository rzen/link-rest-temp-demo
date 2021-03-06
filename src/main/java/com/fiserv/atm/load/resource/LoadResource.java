package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.Load;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("load")
@Produces(MediaType.APPLICATION_JSON)
public class LoadResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<Load> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(Load.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<Load> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(Load.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<Load> create(String data) {
		return LinkRest.create(Load.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<Load> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(Load.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(Load.class, config).id(id).delete();
	}
}