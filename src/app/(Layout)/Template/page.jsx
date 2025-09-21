'use client'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Header from '../../components/header'
import MobileNav from '../../components/mobileNav'
import HeroSection from '../../components/heroSection'
import CatalogSection from '../../components/catalogSection'
import AboutSection from '../../components/aboutSection'
import ContactSection from '../../components/contactSestion'
import Footer from '../../components/footer'
import QuickViewModal from '../../components/quickViewModal'
import CartDrawer from '../../components/cartDrawer'
import QuoteModal from '../../components/quickViewModal'
import { products, categories } from '../../../data/products'


export default function HomePage() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [cart, setCart] = useState(new Map())
  const [cartOpen, setCartOpen] = useState(false)
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const maxPrice = Math.max(...products.map(p => p.price))
  const [priceRange, setPriceRange] = useState(maxPrice)
  const brands = Array.from(new Set(products.map(p => p.brand)))

  useEffect(() => {
    let filtered = products.slice()

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query)
      )
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (selectedBrand !== 'all') {
      filtered = filtered.filter(p => p.brand === selectedBrand)
    }

    filtered = filtered.filter(p => p.price <= priceRange)

    // Sort
    if (sortBy === 'priceAsc') filtered.sort((a, b) => a.price - b.price)
    if (sortBy === 'priceDesc') filtered.sort((a, b) => b.price - a.price)
    if (sortBy === 'ratingDesc') filtered.sort((a, b) => b.rating - a.rating)

    setFilteredProducts(filtered)
  }, [searchQuery, selectedCategory, selectedBrand, sortBy, priceRange])

  // Cart functions
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId)
    if (!product) return

    const newCart = new Map(cart)
    const existing = newCart.get(productId)
    
    if (existing) {
      existing.qty += 1
    } else {
      newCart.set(productId, { product, qty: 1 })
    }
    
    setCart(newCart)
  }

  const updateQuantity = (productId, delta) => {
    const newCart = new Map(cart)
    const item = newCart.get(productId)
    
    if (item) {
      item.qty += delta
      if (item.qty <= 0) {
        newCart.delete(productId)
      }
    }
    
    setCart(newCart)
  }

  const removeFromCart = (productId) => {
    const newCart = new Map(cart)
    newCart.delete(productId)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart(new Map())
  }

  const getTotalItems = () => {
    return Array.from(cart.values()).reduce((sum, item) => sum + item.qty, 0)
  }

  const getSubtotal = () => {
    return Array.from(cart.values()).reduce((sum, item) => sum + (item.product.price * item.qty), 0)
  }

  const openQuickView = (product) => {
    setQuickViewProduct(product)
    setQuickViewOpen(true)
  }

  const closeQuickView = () => {
    setQuickViewOpen(false)
    setQuickViewProduct(null)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedBrand('all')
    setSortBy('featured')
    setPriceRange(maxPrice)
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onMobileMenuOpen={() => setMobileNavOpen(true)}
        onCartOpen={() => setCartOpen(true)}
        onQuoteOpen={() => setQuoteModalOpen(true)}
        cartItemCount={getTotalItems()}
      />

      <MobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartOpen={() => setCartOpen(true)}
        onQuoteOpen={() => setQuoteModalOpen(true)}
        cartItemCount={getTotalItems()}
      />

      <HeroSection
        onQuoteOpen={() => setQuoteModalOpen(true)}
      />

      <CatalogSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        sortBy={sortBy}
        setSortBy={setSortBy}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        filteredProducts={filteredProducts}
        categories={categories}
        brands={brands}
        onQuickView={openQuickView}
        onAddToCart={addToCart}
        onClearFilters={handleClearFilters}
      />

      <AboutSection />

      <ContactSection
        onQuoteOpen={() => setQuoteModalOpen(true)}
      />

      <Footer />

      <QuickViewModal
        open={quickViewOpen}
        product={quickViewProduct}
        onClose={closeQuickView}
        onAddToCart={(productId) => {
          addToCart(productId)
          closeQuickView()
          setCartOpen(true)
        }}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={Array.from(cart.entries())}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        subtotal={getSubtotal()}
        onProceedToQuote={() => {
          setCartOpen(false)
          setQuoteModalOpen(true)
        }}
      />

      <QuoteModal
        open={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        cartItems={Array.from(cart.values())}
        subtotal={getSubtotal()}
      />
    </Box>
  )
}