//Fetch a single product
export async function GET(request) {
    const { pathname } = new URL(request.url);

    const id = pathname.replace('/api/products/', '');
   
   
    return NextResponse.json(id);
  }
  