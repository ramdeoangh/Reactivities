using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;


public class ActivitiesController : BaseApiController
{
    private readonly ILogger<ActivitiesController> _logger;


    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new ActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivitiesById(Guid id)
    {
        return await Mediator.Send(new ActivityDetails.Query{Id=id});
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity)
    {
        return Ok(await Mediator.Send(new ActivityCreate.Command{activity=activity}));
    }
}
