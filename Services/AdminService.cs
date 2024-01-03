using Mapster;
using Microsoft.EntityFrameworkCore;
using SportBin.Data;
using SportBin.Models.DTO;

namespace SportBin.Services
{
    public class AdminService : BaseService
    {
        public AdminService(DataContext ctx) : base(ctx)
        {
        }
        public async Task<List<UserDTO>> GetAllUsers()
        {
            return await _ctx.Users
                .ProjectToType<UserDTO>()
                .ToListAsync();
        }
        public async Task<List<CategoryDTO>> GetAllCategories()
        {
            return await _ctx.Category
                .ProjectToType<CategoryDTO>()
                .ToListAsync();
        }

    }
}
