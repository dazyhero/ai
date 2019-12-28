module.exports = class BoundaryError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'BoundaryError';
  }
};
