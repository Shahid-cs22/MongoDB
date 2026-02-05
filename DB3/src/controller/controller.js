import Counter from "../models/countFun.js";

export const initializeCount = async () => {
  const counter = await Counter.findOne();
  if (!counter) await Counter.create({ count: 0 });
};

export const getCounter = async (req, res) => {
  const counter = await Counter.findOne();
  res.status(200).json({ count: counter.count });
};

export const resetCounter = async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    {},
    { count: 0 },
    { new: true }
  );
  res.status(200).json({ count: counter.count });
};
