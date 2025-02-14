'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { motion } from 'framer-motion'

const ChartComponent = dynamic(() => Promise.resolve(Chart), { ssr: false })

const Chart = () => {
  const data = [
    { age: 18, collagen: 100 },
    { age: 30, collagen: 85 },
    { age: 40, collagen: 80 },
    { age: 50, collagen: 65 },
    { age: 60, collagen: 50 },
    { age: 70, collagen: 35 },
    { age: 80, collagen: 20 },
    { age: 90, collagen: 5 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto mt-16 mb-16 bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8 bg-green-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-600 mb-3">
          You&apos;re Not Getting Older – Youre Losing Collagen
        </h2>
        <p className="text-gray-600 text-center text-lg leading-relaxed">
          Aging isn&apos;t about wrinkles or sagging skin. Its about your body slowing collagen
          <span className="font-semibold"> production by 1% every year after 25</span>. Traditional
          fillers just inflate wrinkles temporarily.{' '}
          <span className="text-green-700 font-semibold">Sculptra®</span> works differently: it{' '}
          <span className="italic">rebuilds</span> collagen for results that look natural and
          youthful.
        </p>
      </div>
      
      <div className="px-8 pb-8">
        <div className="h-[400px] w-full mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis
                dataKey="age"
                stroke="#888888"
                label={{ value: 'Age (years)', position: 'bottom', offset: 0 }}
                tickCount={8} 
              />
              <YAxis
                stroke="#888888"
                label={{
                  value: 'Percentage of collagen',
                  angle: -90,
                  position: 'insideLeft',
                  offset: 10,
                }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Area
                type="monotone"
                dataKey="collagen"
                stroke="#16a34a"
                fill="url(#colorGreen)"
                strokeWidth={3}
              />
              <defs>
                <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#bbf7d0" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <blockquote className="mt-8 border-l-4 border-green-600 pl-4 italic text-gray-600 text-lg">
          I tried fillers for years – they made me look puffy. Sculptra gave me my cheekbones back
          without looking fake. <span className="font-semibold">– Sarah, 42</span>
        </blockquote>
      </div>
    </motion.div>
  )
}

export default ChartComponent
