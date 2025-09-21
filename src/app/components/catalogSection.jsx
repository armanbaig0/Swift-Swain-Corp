import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Chip,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Slider,
  Button,
  Card,
  CardContent,
  CardActions,
  Rating,
} from '@mui/material'
import { Search, Visibility, Add } from '@mui/icons-material'
import ProductIcon from './ProductIcon'
import Image from 'next/image'
import Link from "next/link"

export default function CatalogSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  filteredProducts,
  categories,
  brands,
  onQuickView,
  onAddToCart,
  onClearFilters
}) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} id="catalog">
      <Card sx={{ p: { xs: 2, md: 3 }, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h2" component="h2">
            Catalog
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {/* Search */}
          <Grid item xs={12} lg={4}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
              Search
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g., bumpers, grilles, lights"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          </Grid>

          {/* Categories */}
          <Grid item xs={12} lg={4}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
              Category
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? "filled" : "outlined"}
                  sx={{
                    ...(selectedCategory === cat && {
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      color: 'white',
                      boxShadow: '0 10px 25px rgba(249, 115, 22, 0.25)'
                    })
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Brand & Sort */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Brand</InputLabel>
                  <Select
                    value={selectedBrand}
                    label="Brand"
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    <MenuItem value="all">All Brands</MenuItem>
                    {brands.map(brand => (
                      <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Sort</InputLabel>
                  <Select
                    value={sortBy}
                    label="Sort"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <MenuItem value="featured">Featured</MenuItem>
                    <MenuItem value="priceAsc">Price: Low to High</MenuItem>
                    <MenuItem value="priceDesc">Price: High to Low</MenuItem>
                    <MenuItem value="ratingDesc">Top Rated</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          {/* Clear Filters*/}
          <Grid item xs={12}>
            {/* <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
              Price range
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Slider
                value={priceRange}
                onChange={(_, value) => setPriceRange(value)}
                min={10}
                max={250}
                step={5}
                sx={{ 
                  flexGrow: 1,
                  color: 'primary.main',
                  '& .MuiSlider-thumb': {
                    backgroundColor: 'primary.main',
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: 'primary.main',
                  },
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: '80px' }}>
                Up to ${priceRange}
              </Typography>
              <Button 
                variant="outlined" 
                size="small"
                onClick={onClearFilters}
              >
                Clear
              </Button>
            </Box> */}
            <Box>
              <Button
                variant="outlined"
                size="small"
                onClick={onClearFilters}
              >
                Clear
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Results */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Orange accents • Silver cards • Fully responsive
        </Typography> */}
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.length === 0 ? (
          <Grid item xs={12}>
            <Card sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                No parts found
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Try adjusting filters or clearing search.
              </Typography>
            </Card>
          </Grid>
        ) : (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(249, 115, 22, 0.5)',
                    boxShadow: '0 10px 25px rgba(249, 115, 22, 0.25)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      aspectRatio: '4/3',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.4) 100%)',
                      border: '1px solid rgba(71, 85, 105, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      maxWidth: '500%'
                    }}
                  >
                    {product.icon.startsWith('/images') ? (
                      <Image
                        src={product.icon}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain", borderRadius: "8px" }}
                      />
                    ) : (
                      <ProductIcon type={product.icon} size={80} />
                    )}

                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Chip
                      label={product.category}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.7rem',
                        height: '24px',
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}
                    />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {product.brand}
                    </Typography>
                  </Box>

                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, lineHeight: 1.3 }}>
                    {product.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Rating
                      value={product.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                      sx={{ color: '#fbbf24' }}
                    />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {product.rating.toFixed(1)}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: 800,
                      color: 'primary.main',
                      mb: 2
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        startIcon={<Visibility />}
                        // onClick={() => onQuickView(product)}
                        onClick={() => window.open(product.link, "_blank")}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderColor: 'rgba(71, 85, 105, 0.6)'
                        }}
                      >
                        Quick View
                      </Button>
                    </Grid>
                    {/* <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        startIcon={<Add />}
                        onClick={() => onAddToCart(product.id)}
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-200%',
                            left: '-200%',
                            width: '200%',
                            height: '200%',
                            transform: 'rotate(25deg)',
                            background: 'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                            transition: '0.8s',
                          },
                          '&:hover::before': {
                            top: '-100%',
                            left: '-20%',
                          },
                        }}
                      >
                        Add
                      </Button>
                    </Grid> */}
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}