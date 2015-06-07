package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.Flavor;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("flavor")
@Produces(MediaType.APPLICATION_JSON)
public class FlavorResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<Flavor> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(Flavor.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<Flavor> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(Flavor.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<Flavor> create(String data) {
		return LinkRest.create(Flavor.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<Flavor> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(Flavor.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(Flavor.class, config).id(id).delete();
	}
}