
import { NextResponse } from "next/server";
import Product from "@/models/Product";
//Fetch a single product
export async function GET(request) {

    
    try {
      const { pathname } = new URL(request.url);
      const id = pathname.replace('/api/products/', '');
      const product = await Product.findById(id)

      return NextResponse.json({product: product,status:200})
      
    } catch (error) {

      return NextResponse.error(error);
    }
  }
  