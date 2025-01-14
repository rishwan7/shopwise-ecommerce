const express=require("express")
const admin=require("../controller/adminControll")
const productController=require("../controller/productcontrol")
const categoryController=require("../controller/categorycontrol")
const adminLogout=require("../controller/commoncontrol")
const couponController=require("../controller/couponController")
const bannerController=require("../controller/bannerControll")
const multer=require("multer")
const router=express.Router()
const {storage,storage2}=require("../utils/multer")


const upload = multer({ storage: storage });
const banner=multer({storage:storage2})


router.get("/",admin.getAdminHome)

//product-control route



router.get("/addproduct",productController.getAddProduct)
.get("/signup",admin.adminSignup)
.post("/signup",admin.postAdminSignup)
.get("/login",admin.adminLogin)
.post("/login",admin.postAdminLogin)
.post("/addproduct",upload.array('productImage',10),productController.postAddProduct)   
.get('/viewproducts/:categoryId?',productController.getViewProducts)
.delete('/deleteproduct/:id', productController.deleteProduct)
.get("/updateproduct/:id",productController.getUpdateProduct)
.post("/updateproduct/:id",upload.array('productImage',10),productController.postUpdateProduct)
.get("/coupon",couponController.getCoupon)
.post("/coupon",couponController.postCouponControl)
.get("/ordermanage",admin.orderManagement)
.post("/updatestatus",admin.updateOrderStatus   )
.post("/cancelorder",admin.cancelOrder)


//chartdatas
.post("/productCounts",admin.getProductDetails)
.post("/monthlySalesData",admin.salesByDate)
.post("/userjoined",admin.userJoinedCount)


//category-controlroute
router.get("/addcategory",categoryController.getAddCategory)
.get("/getSubcategories/:categoryId",categoryController.getSubcategory)
.get("/viewcategories",categoryController.viewCategories)
.post("/addcategory",categoryController.postAddCategory)
.delete("/deletecategory/:id",categoryController.deleteCategory)
.delete("/deletesubcategory/:id",categoryController.deleteSubcategory)
.post("/updatecategory/:id",categoryController.postUpdateCategory)
.post("/updatesubcategory/:id",categoryController.postUPdateSubcategory)
.get("/banner",bannerController.getBanner)
.post("/banner",banner.single('bannerImage'),bannerController.postBanner)
.get("/viewbanner",admin.getViewBanner)
.get("/viewusers",admin.getViewUsers)
.post("/blockuser",admin.blockUser)
.post("/unblockuser",admin.unBlockUser)
.get("/updatebanner/:id",bannerController.updateBanner)
.post("/updatebanner/:id",bannerController.postUpdateBanner)
.post("/deletebanner/:id",bannerController.deleteBanner   )


//logout

router.get("/logout",adminLogout.logout)








module.exports=router