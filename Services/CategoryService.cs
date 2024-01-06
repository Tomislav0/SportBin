using Mapster;
using Microsoft.EntityFrameworkCore;
using SportBin.Data;
using SportBin.Models.BM;
using SportBin.Models.Definitions;
using SportBin.Models.DTO;

namespace SportBin.Services
{
    public class CategoryService : BaseService
    {
        public CategoryService(DataContext ctx) : base(ctx)
        {
        }
        public async Task<List<CategoryDTO>> GetAllCategories()
        {
            return await _ctx.Category
                .ProjectToType<CategoryDTO>()
                .ToListAsync();
        }

        public async Task<CategoryDTO> GetCategoryById(Guid categoryId)
        {
            return await _ctx.Category.Where(e => e.Id == categoryId).Select(e => new CategoryDTO()
            {
                Id = e.Id,
                Name = e.Name
            }).FirstOrDefaultAsync();
        }

        public async Task<CategoryDTO> AddCategory(CategoryBM model)
        {

            var newCategory = new Category() { Name = model.Name };

            await _ctx.Category.AddAsync(newCategory);

            await _ctx.SaveChangesAsync();

            return newCategory.Adapt<CategoryDTO>();
        }

        public async Task<bool> DeleteCategory(Guid id)
        {

            await _ctx.Category.Where(x => x.Id == id).ExecuteDeleteAsync();

            return true;
        }
    }
}
