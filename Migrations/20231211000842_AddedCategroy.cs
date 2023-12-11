using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportBin.Migrations
{
    /// <inheritdoc />
    public partial class AddedCategroy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventCategory_Register_CategoryId",
                table: "EventCategory");

            migrationBuilder.DropTable(
                name: "Register");

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_EventCategory_Category_CategoryId",
                table: "EventCategory",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventCategory_Category_CategoryId",
                table: "EventCategory");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.CreateTable(
                name: "Register",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Type = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Register", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_EventCategory_Register_CategoryId",
                table: "EventCategory",
                column: "CategoryId",
                principalTable: "Register",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
