"use client"

import { Button } from "@/components/ui/button"
import { Card } from "./ui/card"

interface Category {
  id: string
  name: string
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategories: string[]
  onCategoryChange: (categoryIds: string[]) => void
}

export function CategoryFilter({ categories, selectedCategories, onCategoryChange }: CategoryFilterProps) {
  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      if (selectedCategories.length > 1) {
        onCategoryChange(selectedCategories.filter((id) => id !== categoryId))
      }
    } else {
      onCategoryChange([...selectedCategories, categoryId])
    }
  }

  return (
    <Card className="p-6 mb-8 bg-card border-border">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              variant={selectedCategories.includes(cat.id) ? "default" : "outline"}
              className="capitalize cursor-pointer"
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}
