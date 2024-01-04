using Microsoft.AspNetCore.Mvc;
using SportBin.Data;
using SportBin.Models.BM;
using SportBin.Models.DTO;
using SportBin.Services;

namespace SportBin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryService _categoryService;
        public CategoryController(DataContext ctx, CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<CategoryDTO>>> GetAllCategories()
        {
            var result = await _categoryService.GetAllCategories();
            return Ok(result);
        }

        [HttpPost("")]
        public async Task<ActionResult<CategoryDTO>> AddCategory(CategoryBM model)
        {
            var result = await _categoryService.AddCategory(model);
            return Ok(result);
        }

        [HttpDelete("{categoryId}")]
        public async Task<ActionResult<bool>> DeleteCategory([FromRoute] Guid categoryId)
        {
            var result = await _categoryService.DeleteCategory(categoryId);
            return Ok(result);
        }
    }
}