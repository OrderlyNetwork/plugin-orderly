import { OrderSide } from "@orderly.network/types";
import { OrderType } from "@orderly.network/types";
import { z } from "zod";

export const supportedEvmChainIdsSchema = z.enum([
  "mainnet",
  "arbitrum",
  "optimism",
  "base",
  "mantle",
  "sei",
  "avalanche",
  "sepolia",
  "arbitrumSepolia",
  "optimismSepolia",
  "baseSepolia",
  "mantleSepoliaTestnet",
  "seiDevnet",
  "avalancheFuji",
]);
export const supportedEvmChainIds = supportedEvmChainIdsSchema.options;

export const closePositionEvmSchema = z.object({
  chain_name: supportedEvmChainIdsSchema,
  symbol: z.string(),
});
export const closePositionSolanaSchema = z.object({
  chain_name: z.literal("solana"),
  symbol: z.string(),
});

export const createOrderEvmSchema = z.object({
  chain_name: supportedEvmChainIdsSchema,
  symbol: z.string(),
  order_type: z.nativeEnum(OrderType),
  order_price: z
    .string()
    .transform((value) => value || undefined)
    .optional(),
  order_quantity: z
    .string()
    .transform((value) => value || undefined)
    .optional(),
  side: z.nativeEnum(OrderSide),
});
export const createOrderSolanaSchema = z.object({
  chain_name: z.literal("solana"),
  symbol: z.string(),
  order_type: z.nativeEnum(OrderType),
  order_price: z
    .string()
    .transform((value) => value || undefined)
    .optional(),
  order_quantity: z
    .string()
    .transform((value) => value || undefined)
    .optional(),
  side: z.nativeEnum(OrderSide),
});

export const depositEvmSchema = z.object({
  chain_name: supportedEvmChainIdsSchema,
  amount: z.string(),
});
export const depositSolanaSchema = z.object({
  chain_name: z.literal("solana"),
  amount: z.string(),
});

export const withdrawEvmSchema = z.object({
  chain_name: supportedEvmChainIdsSchema,
  amount: z.string(),
});
export const withdrawSolanaSchema = z.object({
  chain_name: z.literal("solana"),
  amount: z.string(),
});