package com.fiserv.atm.load.resource;

import com.fiserv.atm.load.cayenne.Stream;
import com.nhl.link.rest.DataResponse;
import com.nhl.link.rest.LinkRest;
import com.nhl.link.rest.SimpleResponse;

import javax.ws.rs.*;
import javax.ws.rs.core.Configuration;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("stream")
@Produces(MediaType.APPLICATION_JSON)
public class StreamResource {

	@Context
	private Configuration config;

	@GET
	public DataResponse<Stream> getAll(@Context UriInfo uriInfo) {
		return LinkRest.select(Stream.class, config).uri(uriInfo).select();
	}

	@GET
	@Path("{id}")
	public DataResponse<Stream> getOne(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.select(Stream.class, config).byId(id).uri(uriInfo).select();
	}

	@POST
	public DataResponse<Stream> create(String data) {
		return LinkRest.create(Stream.class, config).process(data);
	}

	@PUT
	@Path("{id}")
	public DataResponse<Stream> createOrUpdate(@PathParam("id") int id, String data) {
		return LinkRest.createOrUpdate(Stream.class, config).process(data);
	}

	@DELETE
	@Path("{id}")
	public SimpleResponse delete(@PathParam("id") int id, @Context UriInfo uriInfo) {
		return LinkRest.delete(Stream.class, config).id(id).delete();
	}
}