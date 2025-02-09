"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

type Stock = {
  symbol: string
  name: string
  price: number
  change: number
  quantity: number
}

export default function Portfolio() {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [newStock, setNewStock] = useState({ symbol: "", quantity: 0 })

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      updateStockPrices()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const updateStockPrices = () => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) => ({
        ...stock,
        price: +(stock.price + (Math.random() - 0.5) * 2).toFixed(2),
        change: +((Math.random() - 0.5) * 2).toFixed(2),
      })),
    )
  }

  const addStock = () => {
    if (newStock.symbol && newStock.quantity > 0) {
      const stockData: Stock = {
        symbol: newStock.symbol.toUpperCase(),
        name: `${newStock.symbol.toUpperCase()} Corp`,
        price: +(Math.random() * 100 + 50).toFixed(2),
        change: +((Math.random() - 0.5) * 2).toFixed(2),
        quantity: newStock.quantity,
      }
      setStocks([...stocks, stockData])
      setNewStock({ symbol: "", quantity: 0 })
    }
  }

  const totalValue = stocks.reduce((sum, stock) => sum + stock.price * stock.quantity, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Portfolio</CardTitle>
        <CardDescription>Total Value: ${totalValue.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <Input
            placeholder="Stock Symbol"
            value={newStock.symbol}
            onChange={(e) => setNewStock({ ...newStock, symbol: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={newStock.quantity || ""}
            onChange={(e) => setNewStock({ ...newStock, quantity: Number.parseInt(e.target.value) || 0 })}
          />
          <Button onClick={addStock}>Add Stock</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell>{stock.symbol}</TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>${stock.price.toFixed(2)}</TableCell>
                <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                  {stock.change >= 0 ? (
                    <ArrowUpIcon className="inline mr-1" />
                  ) : (
                    <ArrowDownIcon className="inline mr-1" />
                  )}
                  {Math.abs(stock.change).toFixed(2)}%
                </TableCell>
                <TableCell>{stock.quantity}</TableCell>
                <TableCell>${(stock.price * stock.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

